await with No Defined async: Reducing JavaScript Noise

The arrival of async/await functions was revolutionary back in the 2010s. Before that, using Promises in asynchronous programming often felt laborious and clunky. Libraries like Bluebird helped, but I still found myself double-checking everything and waiting for runtime errors before feeling confident.

Today I learned that JavaScript modules—specifically .mjs files or .js files declared as ES modules—now support top-level await. That means you no longer need to wrap your await calls inside an async function, as long as you’re working in an ES module context!

Example: Before and After

// OLD (db-utils.mjs)
async function getDbData(query) {
	const dbData = await database.execute(query);
	const jsonData = JSON.parse(dbData);
	return jsonData;
}

// NEW (db-utils.mjs) — With Top-Level await
const dbData = await database.execute(query);
const jsonData = JSON.parse(dbData);

Note: Top-level await is only valid at the module scope. You still need to mark functions as async if you’re using await inside them.

While this may seem like an infinitesimal change to some, I see it as a meaningful improvement for developer experience. It reduces linter and error noise and supports cleaner, more modern JavaScript standards.

I already use JS modules for essentially everything, and it’s rare that I’m not using await when working with external resources—so this is a no-brainer improvement that genuinely makes me happy.