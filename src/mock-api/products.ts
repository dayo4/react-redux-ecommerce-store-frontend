import { Factory, Model, Server } from "miragejs";
import NewRealeasesIcon from '@/assets/icons/cate/new-release.svg';
import ClothingIcon from '@/assets/icons/cate/clothing.svg';
import ShoesIcon from '@/assets/icons/cate/shoes.svg';
import AccessoriesIcon from '@/assets/icons/cate/accessories.svg';
import ActivewearIcon from '@/assets/icons/cate/activewear.svg';
import GiftsIcon from '@/assets/icons/cate/gifts.svg';
import InspirationIcon from '@/assets/icons/cate/inspiration.svg';

export default {
  routes(server: Server) {
    server.post("/getAllCategories", (schema) => {
      return schema.categories.all()
    });
  },
  categories: [
    {id: 1, title: "New Arrivals", href: "/categories/new-arrivals", icon: NewRealeasesIcon },
    {id: 2, title: "Clothing", href: "/categories/clothing", icon: ClothingIcon },
    {id: 3, title: "Shoes", href: "/categories/shoes", icon: ShoesIcon },
    {id: 4, title: "Accessories", href: "/categories/accessories", icon: AccessoriesIcon },
    {id: 5, title: "Activewear", href: "/categories/activewear", icon: ActivewearIcon },
    {id: 6, title: "Gifts & Living", href: "/categories/gifts", icon: GiftsIcon },
    {id: 7, title: "Inspiration", href: "/categories/inspiration", icon: InspirationIcon },
 ]
}
