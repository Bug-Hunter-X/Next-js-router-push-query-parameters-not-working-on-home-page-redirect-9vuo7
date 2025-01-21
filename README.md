# Next.js router.push Query Parameter Issue

This repository demonstrates a bug in Next.js where using `router.push` with query parameters when redirecting to the home page does not append the parameters to the URL correctly.  The issue appears specific to redirecting to the root path ('/').

## Bug Description

The provided code includes two pages: a home page and an about page.  Clicking a button on the about page attempts to redirect to the home page with a query parameter. However, the query parameter is not reflected in the URL after the redirect.

## Solution

The solution involves using the `router.replace` method instead of `router.push`. `router.replace` directly replaces the current entry in the browser history, ensuring the query parameters are properly handled in the URL even when navigating to the root path.