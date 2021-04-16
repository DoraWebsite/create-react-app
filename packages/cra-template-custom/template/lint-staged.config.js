const micromatch = require('micromatch')
const prettier = require('prettier')
const _ = require('lodash')
const path = require('path')

const prettierLanguages = prettier.getSupportInfo().languages

const [prettierSupportedFilenames, prettierSupportedExtensions] = prettierLanguages
  .reduce(([filenames, extensions], h) => [_.concat(filenames, h.filenames), _.concat(extensions, h.extensions)], [
    [],
    [],
  ])
  .map((e) => e.filter(Boolean))

const addQuotes = (a) => `"${a}"`

module.exports = (allStagedFiles) => {
  const prettierFiles = micromatch(allStagedFiles, [
    ...prettierSupportedFilenames.map((filename) => `**/${filename}`),
    ...prettierSupportedExtensions.map((extension) => `**/*${extension}`),
  ])
  const prettiers = prettierFiles.length > 0 ? [`prettier --write ${prettierFiles.map(addQuotes).join(' ')}`] : []

  const basenames = prettierFiles.map((e) => path.basename(e))

  return [...prettiers, basenames.includes('package.json') && 'sort-package-json'].filter((e) => e)
}
