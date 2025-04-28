import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Menu Items Routes
  app.get('/api/menu-items', async (req, res) => {
    try {
      const menuItems = await storage.getAllMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch menu items' });
    }
  });

  app.get('/api/menu-items/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const menuItem = await storage.getMenuItem(id);
      
      if (!menuItem) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
      
      res.json(menuItem);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch menu item' });
    }
  });

  app.get('/api/menu-items/category/:category', async (req, res) => {
    try {
      const category = req.params.category;
      const menuItems = await storage.getMenuItemsByCategory(category);
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch menu items by category' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
