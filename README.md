## A quick ideabox app built in Next.js 15 with the learning goals of:
- ✅ Learn app router
- ~Create an endpoint using next api to fetch any data~ This is a feature in Next's pages router, not app router (use route handler or server components instead)
- ✅ Boost familiarity using Tailwind CSS
- ✅ Use server components
- ✅ Use suspense boundaries to handle loading state

## App should:
- ✅ Allow user to create an "idea" composed of text string and time saved
- ✅ Allow user to "favorite" ideas
- ✅ Filter by favorite when /favorites URL is accessed 
- ✅ Fetch data from external API, transform data in API layer, send transformed data to front end (GET)
- ~Send data to api layer and do something with it depending no value ("POST" but not rly)~ No endpoint created due to app router usage (can pass POST request through the server component fetch call anyway)
