import {makeChance} from '../../lib/chance'

import {
  getAll as _getAll,
  getOne as _getOne,
  create as _create,
  update as _update,
  remove as _remove,
  search as _search,
} from './service'

const chance = makeChance()

describe('getAll', () => {
  it('implement tests', async () => {
    // const offset = chance.integer({ min: 0, max: 9 });
    // const limit = chance.integer({ min: 0, max: 9 });
    // const order = chance.natural({ min: -1, max: 1, exclude: [0] });
    // const res = await _getAll(mongo, offset, limit, 1);
    // expect(res).toEqual("from getAll");
  })
})

describe('getOne', () => {
  it('implement tests', async () => {
    // const res = await getOne()
    // expect(res).toEqual('from getOne')
  })
})

describe('create', () => {
  it('implement tests', async () => {
    // const res = await create()
    // expect(res).toEqual('from create')
  })
})

describe('update', () => {
  it('implement tests', async () => {
    // const res = await update()
    // expect(res).toEqual('from update')
  })
})

describe('remove', () => {
  it('implement tests', async () => {
    // const res = await remove()
    // expect(res).toEqual('from remove')
  })
})

describe('search', () => {
  it('implement tests', async () => {
    // const res = await search()
    // expect(res).toEqual('from search')
  })
})
