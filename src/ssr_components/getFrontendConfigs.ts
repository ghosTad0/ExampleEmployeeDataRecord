'use server'

import yaml from 'js-yaml'
import fs from 'fs'
import path from "path"

export default async function getFrontendConfigs(){
    try{
        const feConfigString = fs.readFileSync(path.join(`${process.env.STATIC_SRC_DIR}`, `${process.env.FE_CONFIGS}`), 'utf-8')
        const feConfig = yaml.load(feConfigString)
        console.log(feConfig)
        return feConfig
    } catch (e: any) {
        console.log(`Error occured when reading frontend configs, returning defaults, error: ${e}`)
        return {}
    }

}
