import { AddEmployeeFormType } from "@/custom_types_interfaces/add-employee-form-type"
import {z, ZodType} from "zod"

const employeeAddSchema: ZodType<AddEmployeeFormType> = z.object({
    employeeUserName: z.string().min(1, {message: "Username is required!"}).max(20, {message: "Max Username length is 20!"}),
    employeeName: z.string().min(1, {message: "Name is required!"}).max(30, {message: "Name length is 30!"}),
    // employeeAge: z.number().gte(20, {message: "Age should be higher than 20"}).lte(100, {message: "Age should be lower than or equal 100"}),
    employeeAge: z
    .string()
    .min(1, {message: "Age is required"})
    .refine((val) => !isNaN(Number(val)), {
      message: 'Age must be a valid number',
    })
    .transform((val) => Number(val)) // Convert string to number. And the register of reactHookForm will fill like a number.
    .refine((val) => val >= 0, {
      message: 'Age must be greater than or equal to 0',
    })
    .refine((val) => val <= 120, {
      message: 'Age must be less than or equal to 120',
    }),
    employeeDesig: z.string().min(1, {message: "Designation is required!"}).max(20, {message: "Max Designation string length is 20!"}),
})

export {employeeAddSchema}