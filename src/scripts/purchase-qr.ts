/**
 * Open a payment code alone in a modal dialog so a phone cannot pick up the neighbouring code.
 * Uses the native `<dialog>` element, which traps focus, closes on Escape, and restores focus on close.
 */
export function initPaymentQrDialogs(): void {
  for (const trigger of document.querySelectorAll<HTMLButtonElement>('[data-qr-open]')) {
    const dialog = document.getElementById(trigger.dataset.qrOpen ?? '');
    if (!(dialog instanceof HTMLDialogElement)) continue;

    trigger.addEventListener('click', () => dialog.showModal());

    // Clicks on the backdrop land on the dialog element itself; the padded body covers the rest.
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });

    for (const closer of dialog.querySelectorAll<HTMLButtonElement>('[data-qr-close]')) {
      closer.addEventListener('click', () => dialog.close());
    }
  }
}
