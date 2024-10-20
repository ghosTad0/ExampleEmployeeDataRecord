#!/bin/sh

migration_name=init_$(cat /proc/sys/kernel/random/uuid)
cp -r __production_migrations/* /app/node_modules/.prisma/client/migrations   # PROPER WAY OF MIGRATING. COPY SCHEMA GENERATED IN DEV ENV, THEN RUN MIGRATE DEPLOY
# yes | npx prisma migrate dev --skip-generate --create-only --name $migration_name --schema node_modules/.prisma/client/schema.prisma   # THIS DOES NOT WORK PROPERLY IN NON-INTERACTIVE ENVS, SOON GET TO THE BEST PRACTICES
yes | npx prisma migrate deploy --schema node_modules/.prisma/client/schema.prisma
node server.js