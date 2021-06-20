// @ts-nocheck

import { Client } from "@notionhq/client";
import { DatabasesQueryResponse } from "@notionhq/client/build/src/api-endpoints";
import { getNotionAPIKey } from "../utils/api";

export class Train {
  notion = new Client({
    auth: getNotionAPIKey(),
  });

  async checkIn(code: string) {
    if (code === "")
      return this.notion.pages.create({
        parent: {
          database_id: "79df706a109546f798e74c0105752329",
        },
        properties: {
          "Inc ID": "",
        },
      });
  }
}
