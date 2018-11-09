import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filterRole"
})
export class FilterRolePipe implements PipeTransform {
  transform(
    items: Array<any>,
    conditions: { [field: string]: any }
  ): Array<any> {
    return items.filter(item => {
      for (const field in conditions) {
        if (item[field]) {
          if (
            item[field].split(",").indexOf(conditions[field]) > -1 ||
            item[field] === "*"
          ) {
            return true;
          }
        } else {
          return true; // There is no role field, so this menu item has no security
        }
      }
      return false;
    });
  }
}
