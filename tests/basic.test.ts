import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch } from '@nuxt/test-utils'

describe('Renders', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true
  })

  it('Renders anything', async () => {
    expect(await $fetch('/')).toMatch('Imagine you could')
  })
})
