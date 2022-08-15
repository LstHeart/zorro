import { OverlayContainer } from '@angular/cdk/overlay';

export class AppOverlayContainer extends OverlayContainer {
  protected override _createContainer(): void {
    const container: HTMLDivElement = document.createElement('div');
    // container.classList.add('app-overlay-container');
    container.classList.add('cdk-overlay-container');

    const element: Element | null | undefined = document.querySelector('app-root')?.shadowRoot?.querySelector('#zorro-root');
    if (element !== null && element !== undefined) {
      element.appendChild(container);
      this._containerElement = container;
    }
  }
}
