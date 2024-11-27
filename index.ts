import { RepoMetadata } from "@mochiapp/js/dist";

export * from "./src/module";

export default {
  name: "JoJo",
  description: "I copied this as test.\nAs this is my first time.",
  author: "Rem",
  icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAAAORlWElmTU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAAVgEbAAUAAAABAAAAXgEoAAMAAAABAAIAAAEyAAIAAAAUAAAAZodpAAQAAAABAAAAegAAAAAAAACQAAAAAQAAAJAAAAABMjAyMzoxMjoyOSAxOToxNzowNgAABZADAAIAAAAUAAAAvJAEAAIAAAAUAAAA0KABAAMAAAABAAEAAKACAAQAAAABAAAAS6ADAAQAAAABAAAASwAAAAAyMDIzOjEyOjIzIDE5OjQ3OjA3ADIwMjM6MTI6MjMgMTk6NDc6MDcAREiHbgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAABz9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjIwMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4yMDA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpJbWFnZUxlbmd0aD4yMDA8L3RpZmY6SW1hZ2VMZW5ndGg+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOkltYWdlV2lkdGg+MjAwPC90aWZmOkltYWdlV2lkdGg+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjE0NDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+MTQ0PC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8cGhvdG9zaG9wOkRhdGVDcmVhdGVkPjIwMjMtMTItMjNUMTk6NDc6MDcrMDEwMDwvcGhvdG9zaG9wOkRhdGVDcmVhdGVkPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMy0xMi0yOVQxOToxNzowNiswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRlRGF0ZT4yMDIzLTEyLTIzVDE5OjQ3OjA3KzAxMDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDIzLTEyLTI5VDE5OjE3OjA2KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAg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",
} satisfies RepoMetadata;
