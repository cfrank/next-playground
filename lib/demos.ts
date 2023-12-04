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
    title: "Intercepted replaced routes",
    description: "Tests redirecting with replace within an intercepted route.",
  },
];
