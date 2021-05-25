import { WeeklyViewRepository } from "@/infra/db";
import schedule from "node-schedule";

export const interval = schedule.scheduleJob("0 0 0 ? * MON *", async () => {
  try {
    const weeklyViewRepository = new WeeklyViewRepository();
    await weeklyViewRepository.deleteAll();
  } catch (e) {}
});
