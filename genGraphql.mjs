//@ts-check
import fsExtra from 'fs-extra'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'

import { generate } from '@graphql-codegen/cli'

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import jsonfile from 'jsonfile'
import * as yaml from 'js-yaml'
import replaceInFile from 'replace-in-file'

const __dirname = dirname(fileURLToPath(import.meta.url))

const mainGeneratedFile = join(__dirname, './composables/generated-operations.ts')

//@ts-ignore
const generateConfig = yaml.load(
    await readFile(join(__dirname, 'codegen.yml'), 'utf8'),
).generates.default

await generate({
    schema: join(__dirname, './api.graphql'),
    documents: join(__dirname, './graphql/*.graphql'),
    generates: {
        [mainGeneratedFile]: generateConfig,
    },
})

// TODO create NPM package replace-in-file-all
// await replaceInFile.replaceInFile({
//     files: [mainGeneratedFile],
//     from: /Exact<{ \[key: string\]: never; }>/g,
//     to: 'void',
// })
