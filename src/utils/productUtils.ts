import { AdItemType, ProductItemType } from "../redux/actions/products/types";


const AD_ITEM_PLACE = 20; // show ad item after every a number of items.

export function isAdItem(item: ProductItemType): item is AdItemType {
    const adKey: keyof AdItemType = "adId";
    return !!item.hasOwnProperty(adKey);
}

export function fillAdsInList(newItems: ProductItemType[]): ProductItemType[] {
    return newItems.reduce((acc: ProductItemType[], curr, i) => {
        if((i+1) % AD_ITEM_PLACE === 0 && !isAdItem(curr)) {
          const id = new Date().getTime().toString();
          const adId = (Math.floor(Math.random()*1000)).toString();
          return [...acc,{ id, adId } , curr ];
        }
        return [...acc, curr];
      }, []);
}

