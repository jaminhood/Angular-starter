interface Category {
  categoryID: string;
  categoryName: string;
  categoryIcon: string;
  timestamp: string;
}

interface ProductContract {
  name: string;
  price: number;
}

interface GetUsersContract {
  data: UserContract[] | [];
  meta: any[];
  links: any[];
}

interface UserContract {
  avatar: string;
  created_at: string;
  email: string;
  id: string | number;
  name: string;
  role: 'admin' | 'user';
}
