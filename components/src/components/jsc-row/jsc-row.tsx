import { Component, Prop, h, Element } from '@stencil/core';
import { ItemsPropValue, JustifyPropValue } from '../../types/propTypes';
import { itemsValue, justifyValue } from '../../utils/propValueMappings';

@Component({
  tag: 'jsc-row',
  styleUrl: 'jsc-row.css',
  shadow: true,
})
export class Row {
  @Element() host: HTMLElement;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() background: string;
  @Prop() margin: string;
  @Prop() padding: string;
  @Prop() justify: JustifyPropValue = 'start';
  @Prop() items: ItemsPropValue = 'start';

  componentDidLoad() {
    const childrenSlot = this.host.querySelector('div[slot=children]') as HTMLSlotElement;

    Object.assign((childrenSlot as HTMLElement).style, {
      'box-sizing': 'border-box',
      'width': this.width,
      'height': this.height,
      'background': this.background,
      'padding': this.padding,
      'margin': this.margin,
      'justifyContent': justifyValue[this.justify],
      'alignItems': itemsValue[this.items],
    });
  }

  render() {
    return <slot name="children"></slot>;
  }
}
