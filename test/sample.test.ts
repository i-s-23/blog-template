export default {}

const existId = (data: string | any[]) =>
  (data.length && Object.hasOwn(data[0], 'id') && data[0].id) || undefined

const test = (data: Object): boolean => data.hasOwnProperty('id')

it('正常系', () => {
  // const input = [{ id: 11, project: 'no' }]
  const input = [
    {
      id: 19,
      project: 'fitstTlade ',
      language: {
        japanese: 'パイソン',
        english: 'Python',
      },
      date: '2022-09-31',
    },
    {
      id: 20,
      project: 'secondTlade ',
      language: {
        japanese: 'ゴーラング',
        english: 'Golang',
      },
      date: '2022-12-10',
    },
  ]
  const result = existId(input)
  expect(result).toBe(19)
})
