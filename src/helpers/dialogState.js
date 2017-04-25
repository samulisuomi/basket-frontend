/**
 * Shared helper functions for managing state of  dialogs.
 */

/**
 * Returns an initial dialog state from provided dialogIds where all the IDs are set to false.
 * E.g. getInitialDialogsOpenState("a", "b", "c") returns { a: false, b: false, c: false }
 * @param {Array} dialogIds 
 */
export const getInitialDialogsOpenState = (...dialogIds) =>
  dialogIds.reduce((previous, current) => Object.assign(previous, {[current]: false }), {});

/**
 * Returns new open dialog state where all the other dialogs are not open except openDialogId.
 * @param {string} openDialogId
 * @param {Array} dialogIds
 */
export const getDialogsOpenState = (openDialogId, ...dialogIds) => {
  let dialogsOpen = getInitialDialogsOpenState(...dialogIds);
  dialogsOpen[openDialogId] = true;
  return dialogsOpen;
};