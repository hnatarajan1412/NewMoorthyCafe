import { users, type User, type InsertUser, type MenuItem, type InsertMenuItem } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Menu Items
  getAllMenuItems(): Promise<MenuItem[]>;
  getMenuItem(id: number): Promise<MenuItem | undefined>;
  getMenuItemsByCategory(category: string): Promise<MenuItem[]>;
  createMenuItem(menuItem: InsertMenuItem): Promise<MenuItem>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private menuItems: Map<number, MenuItem>;
  private userCurrentId: number;
  private menuItemCurrentId: number;

  constructor() {
    this.users = new Map();
    this.menuItems = new Map();
    this.userCurrentId = 1;
    this.menuItemCurrentId = 1;
    
    // Initialize with sample menu items
    this.initializeMenuItems();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Menu Items Methods
  async getAllMenuItems(): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values());
  }
  
  async getMenuItem(id: number): Promise<MenuItem | undefined> {
    return this.menuItems.get(id);
  }
  
  async getMenuItemsByCategory(category: string): Promise<MenuItem[]> {
    return Array.from(this.menuItems.values()).filter(
      (item) => item.category === category
    );
  }
  
  async createMenuItem(insertMenuItem: InsertMenuItem): Promise<MenuItem> {
    const id = this.menuItemCurrentId++;
    const menuItem: MenuItem = { ...insertMenuItem, id };
    this.menuItems.set(id, menuItem);
    return menuItem;
  }
  
  private initializeMenuItems() {
    const sampleMenuItems: InsertMenuItem[] = [
      {
        name: "Butter Chicken",
        description: "Tender chicken in a rich, creamy tomato sauce with a blend of aromatic spices.",
        price: 16.99,
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        isPopular: true
      },
      {
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.",
        price: 14.99,
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        isPopular: false
      },
      {
        name: "Paneer Tikka",
        description: "Marinated cottage cheese cubes grilled to perfection with bell peppers and onions.",
        price: 12.99,
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        isPopular: true
      },
      {
        name: "Chicken Tikka Masala",
        description: "Grilled chicken pieces in a creamy, spiced tomato sauce with a hint of fenugreek.",
        price: 17.99,
        category: "Main Course",
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        isPopular: true
      },
      {
        name: "Garlic Naan",
        description: "Soft, leavened bread topped with garlic and butter, baked in a tandoor oven.",
        price: 3.99,
        category: "Appetizers",
        image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        isPopular: false
      },
      {
        name: "Gulab Jamun",
        description: "Deep-fried milk solids soaked in rose-flavored sugar syrup, served warm.",
        price: 5.99,
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
        isPopular: true
      }
    ];
    
    sampleMenuItems.forEach(item => {
      this.createMenuItem(item);
    });
  }
}

export const storage = new MemStorage();
