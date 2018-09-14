import { Product } from './../../shared/Products';
import { Pipe, PipeTransform } from '@angular/core';
interface Args {
  availability?: boolean;
  range?: number[];
  stock?: number;
}
@Pipe({
  name: 'filterProduct'
})
export class FilterProductPipe implements PipeTransform {

  transform(value: Product[], args: Args): any {
    if (value && args) {
      return value.filter(item => {
        let checked = true;
        let price = parseFloat(item.price.replace('$', '').replace(',', '.'));
        if (args.availability==true) {
          checked = args.availability == item.available
        }
        if (args.range && args.range.length > 0 && args.range[0]) {
          checked = checked && price > args.range[0];
        }
        if (args.range && args.range.length > 1 && args.range[1]) {
          checked = checked && price < args.range[1];
        }
        if (args.stock) {
          checked = checked && item.quantity == args.stock;
        }
        return checked;
      })
    }
    return null;
  }

}
