export const filterSelector = state => state.filter;

export const contactsSelector = state => state.contacts.items;

export const isLoadingSelector = state => state.contacts.isLoading;



export const filteredContactsSelector = state => {
  return state.contacts.items.filter(contact => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });
};
