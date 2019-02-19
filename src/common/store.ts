import { types } from 'mobx-state-tree';

const CommonModel = types
  .model('Task', {
    isMenuOpen: types.optional(types.boolean, false),
  })
  .actions(self => ({
    toggleMenu: () => { self.isMenuOpen = !self.isMenuOpen; },
    closeMenu: () => { self.isMenuOpen = false; },
    openMenu: () => { self.isMenuOpen = false; },
  }));

export type CommonModelStoreType = typeof CommonModel.Type;
export const commonModelStoreInstance = CommonModel.create({});
