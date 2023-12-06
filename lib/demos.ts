export type Item = {
  slug: string;
  title: string;
  description: string;
};

export const demos: Item[] = [
  /**
   * When loading an intercepted route we should be able to trigger
   * a server action which calls `redirect('..', 'replace')` with
   * another intercepted route and we should see the updated route
   * within the host page.
   *
   * Calling `router.back()` from within a client component present
   * within the intercepted route should return us back to the host
   * route.
   *
   * This allows an experience where the intercepted route "updates"
   * through a server-side re-render without the user leaving the
   * context of the host route.
   */
  {
    slug: "intercepted-replaced-routes",
    title: "Intercepted routes",
    description: "Tests redirecting with replace within an intercepted route.",
  },
  /**
   * When adding a suspense boundary as a direct child of a `<form />` which
   * includes a server action as it's `action` prop we are seeing hydration
   * errors.
   * 
   * Expected behavior: No hydration errors are surfaced
   * 
   * Observed behavior: `Error: Hydration failed because the initial UI does not match what was rendered on the server.`
   */
  {
    slug: "server-action-form-suspense",
    title: "Suspense",
    description: "Placing a suspense boundary as a child of a form with a server action triggers error."
  }
];
