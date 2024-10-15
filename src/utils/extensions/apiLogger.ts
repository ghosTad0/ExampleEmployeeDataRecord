// apiLogger.ts
import winston from "winston";
import { trace, context } from "@opentelemetry/api";
import { NodeTracerProvider } from "@opentelemetry/sdk-trace-node";
import { logs } from "@opentelemetry/api-logs";
import {
    LoggerProvider,
    SimpleLogRecordProcessor,
    ConsoleLogRecordExporter,
} from "@opentelemetry/sdk-logs";
import { WinstonInstrumentation } from "@opentelemetry/instrumentation-winston";
import "winston-daily-rotate-file";
import { registerInstrumentations } from "@opentelemetry/instrumentation";
import path from "path";

// Initialize OpenTelemetry Tracer
const tracerProvider = new NodeTracerProvider();
tracerProvider.register();

// Logger provider setup for OpenTelemetry
const loggerProvider = new LoggerProvider();
loggerProvider.addLogRecordProcessor(
    new SimpleLogRecordProcessor(new ConsoleLogRecordExporter())
);
logs.setGlobalLoggerProvider(loggerProvider);

registerInstrumentations({
    instrumentations: [
        new WinstonInstrumentation({
            logSeverity: 1,
        }),
    ],
});

// Create and configure the Winston logger

const logTransport = new winston.transports.DailyRotateFile({
    level: 'info',
    // filename: 'application-%DATE%.log',
    filename: path.join(process.env.LOG_PATH ? process.env.LOG_PATH : '/hms/logs/employee_app', 'employee_app_api_log.log%DATE%'),
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const apiLogger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ level, message, timestamp }) => {
            const span = trace.getSpan(context.active());
            const traceId = span ? span.spanContext().traceId : "no-trace";
            const spanId = span ? span.spanContext().spanId : "no-span";
            return `${timestamp} [${level}] traceId=${traceId}, spanId=${spanId} : ${message}`;
        })
    ),
    transports: [
        new winston.transports.File({ filename: path.join(process.env.LOG_PATH ? process.env.LOG_PATH : '/hms/logs/employee_app', 'employee_app_api_log.log') }),
        logTransport
    ],
});

export default apiLogger;