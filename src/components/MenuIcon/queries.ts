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