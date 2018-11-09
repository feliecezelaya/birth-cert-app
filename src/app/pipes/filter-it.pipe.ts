import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterIt",
  pure: false
})
export class FilterItPipe implements PipeTransform {
  transform(
    items: Array<any>,
    conditions: { [field: string]: any }
  ): Array<any> {
    return items.filter(item => {
      for (const field in conditions) {
        if (item[field] !== conditions[field]) {
          return false;
        }
      }
      return true;
    });
  }
}
