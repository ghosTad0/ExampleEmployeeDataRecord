'use server'

import yaml from 'js-yaml'
import fs from 'fs'
import path from "path"
// import { revalidatePath } from 'next/cache'

export default async function getFrontendConfigs(){
    try{
        const feConfigString = fs.readFileSync(path.join(`${process.env.STATIC_SRC_DIR}`, `${process.env.FE_CONFIGS}`), 'utf-8')
        const feConfig = yaml.load(feConfigString)
        // revalidatePath('/list-employees')
        return feConfig
    } catch (e: any) {
        console.log(`Error occured when reading frontend configs, returning defaults, error: ${e}`)
        return {}
    }

}
