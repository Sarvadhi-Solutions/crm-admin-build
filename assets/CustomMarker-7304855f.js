const g="data:text/markdown;base64,YGBganN4CmltcG9ydCB7CiAgICBDb21wb3NhYmxlTWFwLAogICAgR2VvZ3JhcGhpZXMsCiAgICBHZW9ncmFwaHksCiAgICBNYXJrZXIsCn0gZnJvbSAncmVhY3Qtc2ltcGxlLW1hcHMnCgpjb25zdCBnZW9VcmwgPQogICAgJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9kZWxkZXJzdmVsZC90b3BvanNvbi9tYXN0ZXIvY29udGluZW50cy9zb3V0aC1hbWVyaWNhLmpzb24nCgpjb25zdCBtYXJrZXJzOiB7CiAgICBtYXJrZXJPZmZzZXQ6IG51bWJlcgogICAgbmFtZTogc3RyaW5nCiAgICBjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXQp9W10gPSBbCiAgICB7CiAgICAgICAgbWFya2VyT2Zmc2V0OiAtMzAsCiAgICAgICAgbmFtZTogJ0J1ZW5vcyBBaXJlcycsCiAgICAgICAgY29vcmRpbmF0ZXM6IFstNTguMzgxNiwgLTM0LjYwMzddLAogICAgfSwKICAgIHsgbWFya2VyT2Zmc2V0OiAxNSwgbmFtZTogJ0xhIFBheicsIGNvb3JkaW5hdGVzOiBbLTY4LjExOTMsIC0xNi40ODk3XSB9LAogICAgeyBtYXJrZXJPZmZzZXQ6IDE1LCBuYW1lOiAnQnJhc2lsaWEnLCBjb29yZGluYXRlczogWy00Ny44ODI1LCAtMTUuNzk0Ml0gfSwKICAgIHsgbWFya2VyT2Zmc2V0OiAxNSwgbmFtZTogJ1NhbnRpYWdvJywgY29vcmRpbmF0ZXM6IFstNzAuNjY5MywgLTMzLjQ0ODldIH0sCiAgICB7IG1hcmtlck9mZnNldDogMTUsIG5hbWU6ICdCb2dvdGEnLCBjb29yZGluYXRlczogWy03NC4wNzIxLCA0LjcxMV0gfSwKICAgIHsgbWFya2VyT2Zmc2V0OiAxNSwgbmFtZTogJ1F1aXRvJywgY29vcmRpbmF0ZXM6IFstNzguNDY3OCwgLTAuMTgwN10gfSwKICAgIHsgbWFya2VyT2Zmc2V0OiAtMzAsIG5hbWU6ICdHZW9yZ2V0b3duJywgY29vcmRpbmF0ZXM6IFstNTguMTU1MSwgNi44MDEzXSB9LAogICAgeyBtYXJrZXJPZmZzZXQ6IC0zMCwgbmFtZTogJ0FzdW5jaW9uJywgY29vcmRpbmF0ZXM6IFstNTcuNTc1OSwgLTI1LjI2MzddIH0sCiAgICB7IG1hcmtlck9mZnNldDogMTUsIG5hbWU6ICdQYXJhbWFyaWJvJywgY29vcmRpbmF0ZXM6IFstNTUuMjAzOCwgNS44NTJdIH0sCiAgICB7IG1hcmtlck9mZnNldDogMTUsIG5hbWU6ICdNb250ZXZpZGVvJywgY29vcmRpbmF0ZXM6IFstNTYuMTY0NSwgLTM0LjkwMTFdIH0sCiAgICB7IG1hcmtlck9mZnNldDogMTUsIG5hbWU6ICdDYXJhY2FzJywgY29vcmRpbmF0ZXM6IFstNjYuOTAzNiwgMTAuNDgwNl0gfSwKICAgIHsgbWFya2VyT2Zmc2V0OiAxNSwgbmFtZTogJ0xpbWEnLCBjb29yZGluYXRlczogWy03Ny4wNDI4LCAtMTIuMDQ2NF0gfSwKXQoKY29uc3QgQ3VzdG9tTWFya2VyID0gKCkgPT4gewogICAgcmV0dXJuICgKICAgICAgICA8Q29tcG9zYWJsZU1hcAogICAgICAgICAgICBwcm9qZWN0aW9uPSJnZW9BemltdXRoYWxFcXVhbEFyZWEiCiAgICAgICAgICAgIHByb2plY3Rpb25Db25maWc9e3sKICAgICAgICAgICAgICAgIHJvdGF0ZTogWzU4LCAyMCwgMF0sCiAgICAgICAgICAgICAgICBzY2FsZTogNDAwLAogICAgICAgICAgICB9fQogICAgICAgID4KICAgICAgICAgICAgPEdlb2dyYXBoaWVzIGdlb2dyYXBoeT17Z2VvVXJsfT4KICAgICAgICAgICAgICAgIHsoeyBnZW9ncmFwaGllcyB9KSA9PgogICAgICAgICAgICAgICAgICAgIGdlb2dyYXBoaWVzLm1hcCgoZ2VvKSA9PiAoCiAgICAgICAgICAgICAgICAgICAgICAgIDxHZW9ncmFwaHkKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Z2VvLnJzbUtleX0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlb2dyYXBoeT17Z2VvfQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD0iI0VBRUFFQyIKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT0iI0Q2RDZEQSIKICAgICAgICAgICAgICAgICAgICAgICAgLz4KICAgICAgICAgICAgICAgICAgICApKQogICAgICAgICAgICAgICAgfQogICAgICAgICAgICA8L0dlb2dyYXBoaWVzPgogICAgICAgICAgICB7bWFya2Vycy5tYXAoKHsgbmFtZSwgY29vcmRpbmF0ZXMsIG1hcmtlck9mZnNldCB9KSA9PiAoCiAgICAgICAgICAgICAgICA8TWFya2VyIGtleT17bmFtZX0gY29vcmRpbmF0ZXM9e2Nvb3JkaW5hdGVzfT4KICAgICAgICAgICAgICAgICAgICA8ZwogICAgICAgICAgICAgICAgICAgICAgICBmaWxsPSJub25lIgogICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U9IiNGRjU1MzMiCiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoPSIyIgogICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPSJyb3VuZCIKICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49InJvdW5kIgogICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIsIC0yNCkiCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEwIiByPSIzIiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIgMjEuN0MxNy4zIDE3IDIwIDEzIDIwIDEwYTggOCAwIDEgMC0xNiAwYzAgMyAyLjcgNi45IDggMTEuN3oiIC8+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDx0ZXh0CiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRBbmNob3I9Im1pZGRsZSIKICAgICAgICAgICAgICAgICAgICAgICAgeT17bWFya2VyT2Zmc2V0fQogICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpJywgZmlsbDogJyM1RDVBNkQnIH19CiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgICAgICB7bmFtZX0KICAgICAgICAgICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgICAgICAgICA8L01hcmtlcj4KICAgICAgICAgICAgKSl9CiAgICAgICAgPC9Db21wb3NhYmxlTWFwPgogICAgKQp9CgpleHBvcnQgZGVmYXVsdCBDdXN0b21NYXJrZXIKYGBgCg==";export{g as default};
