// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"environment.mdx": () => import("../content/docs/environment.mdx?collection=docs"), "index.mdx": () => import("../content/docs/index.mdx?collection=docs"), "quickstart.mdx": () => import("../content/docs/quickstart.mdx?collection=docs"), "api-reference/ai-models.mdx": () => import("../content/docs/api-reference/ai-models.mdx?collection=docs"), "api-reference/deployments.mdx": () => import("../content/docs/api-reference/deployments.mdx?collection=docs"), "api-reference/entity-instances.mdx": () => import("../content/docs/api-reference/entity-instances.mdx?collection=docs"), "api-reference/entity.mdx": () => import("../content/docs/api-reference/entity.mdx?collection=docs"), "api-reference/events.mdx": () => import("../content/docs/api-reference/events.mdx?collection=docs"), "api-reference/index.mdx": () => import("../content/docs/api-reference/index.mdx?collection=docs"), "api-reference/worlds.mdx": () => import("../content/docs/api-reference/worlds.mdx?collection=docs"), "concepts/ai-engine.mdx": () => import("../content/docs/concepts/ai-engine.mdx?collection=docs"), "concepts/architecture.mdx": () => import("../content/docs/concepts/architecture.mdx?collection=docs"), "concepts/deployment.mdx": () => import("../content/docs/concepts/deployment.mdx?collection=docs"), "concepts/entities.mdx": () => import("../content/docs/concepts/entities.mdx?collection=docs"), "concepts/events.mdx": () => import("../content/docs/concepts/events.mdx?collection=docs"), "concepts/index.mdx": () => import("../content/docs/concepts/index.mdx?collection=docs"), "concepts/on-chain-oracle.mdx": () => import("../content/docs/concepts/on-chain-oracle.mdx?collection=docs"), }),
};
export default browserCollections;