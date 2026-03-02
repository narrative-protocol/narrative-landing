// @ts-nocheck
import * as __fd_glob_19 from "../content/docs/concepts/on-chain-oracle.mdx?collection=docs"
import * as __fd_glob_18 from "../content/docs/concepts/index.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/concepts/events.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/concepts/entities.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/concepts/deployment.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/concepts/architecture.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/concepts/ai-engine.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/api-reference/worlds.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/api-reference/index.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/api-reference/events.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/api-reference/entity.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/api-reference/entity-instances.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/api-reference/deployments.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/api-reference/ai-models.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/quickstart.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/environment.mdx?collection=docs"
import { default as __fd_glob_2 } from "../content/docs/concepts/meta.json?collection=docs"
import { default as __fd_glob_1 } from "../content/docs/api-reference/meta.json?collection=docs"
import { default as __fd_glob_0 } from "../content/docs/meta.json?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {"meta.json": __fd_glob_0, "api-reference/meta.json": __fd_glob_1, "concepts/meta.json": __fd_glob_2, }, {"environment.mdx": __fd_glob_3, "index.mdx": __fd_glob_4, "quickstart.mdx": __fd_glob_5, "api-reference/ai-models.mdx": __fd_glob_6, "api-reference/deployments.mdx": __fd_glob_7, "api-reference/entity-instances.mdx": __fd_glob_8, "api-reference/entity.mdx": __fd_glob_9, "api-reference/events.mdx": __fd_glob_10, "api-reference/index.mdx": __fd_glob_11, "api-reference/worlds.mdx": __fd_glob_12, "concepts/ai-engine.mdx": __fd_glob_13, "concepts/architecture.mdx": __fd_glob_14, "concepts/deployment.mdx": __fd_glob_15, "concepts/entities.mdx": __fd_glob_16, "concepts/events.mdx": __fd_glob_17, "concepts/index.mdx": __fd_glob_18, "concepts/on-chain-oracle.mdx": __fd_glob_19, });