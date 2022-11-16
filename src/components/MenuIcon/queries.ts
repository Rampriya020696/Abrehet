/* eslint-disable prettier/prettier */
export const getMenuItems = `
query MyQuery {
    listMenus {
      items {
        icon
        id
        name
      }
    }
  }
  `;