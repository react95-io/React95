export const suppressPropTypesWarnings = () => {
  const origConsoleError = console.error

  beforeEach(() => {
    console.error = () => undefined;
  })

  afterEach(() => {
    console.error = origConsoleError;
  })
}
