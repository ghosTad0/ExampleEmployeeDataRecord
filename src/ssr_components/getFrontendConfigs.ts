'use server'

import yaml from 'js-yaml'
import fs from 'fs'
import path from "path"
import apiLogger from '@/utils/extensions/apiLogger'
// import { revalidatePath } from 'next/cache'

export default async function getFrontendConfigs(){
    try{
        const feConfigString = fs.readFileSync(path.join(`${process.env.STATIC_SRC_DIR}`, `${process.env.FE_CONFIGS}`), 'utf-8')
        const feConfig = yaml.load(feConfigString)
        apiLogger.info(`feConfigs: ${JSON.stringify(feConfig)}`)
        // revalidatePath('/list-employees')
        return feConfig
    } catch (e: any) {
        apiLogger.error(`Error occured when reading frontend configs, returning defaults, error: ${e}`)
        return {}
    }
}
