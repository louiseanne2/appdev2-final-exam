import { mutation } from "./_generated/server";

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // 1. Find an existing user to attach todos to
    const user = await ctx.db.query("users").first();

    if (!user) {
      throw new Error("No users found. Cannot seed todos without a userId.");
    }

    const initialTasks = [
      "Buy groceries",
      "Finish React Native tutorial",
      "Clean the kitchen",
      "Call mom",
      "Schedule dentist appointment",
      "Fix bug in todo app",
      "Read 10 pages of a book",
      "Go for a 20-minute run",
      "Organize desk",
      "Meditate for 5 minutes",
    ];

    // 2. Insert todos linked to userId
    for (const taskText of initialTasks) {
      await ctx.db.insert("todos", {
        text: taskText,
        isCompleted: Math.random() > 0.7,
        userId: user._id, // ✅ relational link
      });
    }

    return `Successfully seeded ${initialTasks.length} tasks for user ${user._id}`;
  },
});