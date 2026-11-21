/**
 * Open payment codes and the order form in modal dialogs. Uses the native `<dialog>` element, which traps focus,
 * closes on Escape, and restores focus to the trigger on close.
 */
export function initPurchaseDialogs(): void {
  for (const trigger of document.querySelectorAll<HTMLButtonElement>('[data-dialog-open]')) {
    const dialog = document.getElementById(trigger.dataset.dialogOpen ?? '');
    if (!(dialog instanceof HTMLDialogElement)) continue;

    trigger.addEventListener('click', () => {
      dialog.showModal();
      dialog.dispatchEvent(new CustomEvent('bt:dialog-open'));
    });

    // Clicks on the backdrop land on the dialog element itself; the padded body covers the rest.
    // A dialog can opt out of pointer dismissal; Escape and its close buttons still work.
    if (!dialog.hasAttribute('data-disable-pointer-dismissal')) {
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
      });
    }

    for (const closer of dialog.querySelectorAll<HTMLButtonElement>('[data-dialog-close]')) {
      closer.addEventListener('click', () => dialog.close());
    }
  }
}
