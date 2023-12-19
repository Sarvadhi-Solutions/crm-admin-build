const g="data:text/markdown;base64,YGBganN4CmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnCmltcG9ydCBCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL3VpL0J1dHRvbicKaW1wb3J0IERpYWxvZyBmcm9tICdAL2NvbXBvbmVudHMvdWkvRGlhbG9nJwppbXBvcnQgdHlwZSB7IE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCcKCmNvbnN0IEN1c3RvbVN0eWxlID0gKCkgPT4gewogICAgY29uc3QgW2RpYWxvZ0lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKQoKICAgIGNvbnN0IG9wZW5EaWFsb2cgPSAoKSA9PiB7CiAgICAgICAgc2V0SXNPcGVuKHRydWUpCiAgICB9CgogICAgY29uc3Qgb25EaWFsb2dDbG9zZSA9IChlOiBNb3VzZUV2ZW50KSA9PiB7CiAgICAgICAgY29uc29sZS5sb2coJ29uRGlhbG9nQ2xvc2UnLCBlKQogICAgICAgIHNldElzT3BlbihmYWxzZSkKICAgIH0KCiAgICBjb25zdCBvbkRpYWxvZ09rID0gKGU6IE1vdXNlRXZlbnQpID0+IHsKICAgICAgICBjb25zb2xlLmxvZygnb25EaWFsb2dPaycsIGUpCiAgICAgICAgc2V0SXNPcGVuKGZhbHNlKQogICAgfQoKICAgIHJldHVybiAoCiAgICAgICAgPGRpdj4KICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PSJzb2xpZCIgb25DbGljaz17KCkgPT4gb3BlbkRpYWxvZygpfT4KICAgICAgICAgICAgICAgIE9wZW4gRGlhbG9nCiAgICAgICAgICAgIDwvQnV0dG9uPgogICAgICAgICAgICA8RGlhbG9nCiAgICAgICAgICAgICAgICBpc09wZW49e2RpYWxvZ0lzT3Blbn0KICAgICAgICAgICAgICAgIHN0eWxlPXt7CiAgICAgICAgICAgICAgICAgICAgY29udGVudDogewogICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDI1MCwKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgfX0KICAgICAgICAgICAgICAgIGNvbnRlbnRDbGFzc05hbWU9InBiLTAgcHgtMCIKICAgICAgICAgICAgICAgIG9uQ2xvc2U9e29uRGlhbG9nQ2xvc2V9CiAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17b25EaWFsb2dDbG9zZX0KICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9InB4LTYgcGItNiI+CiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT0ibWItNCI+RGlhbG9nIFRpdGxlPC9oNT4KICAgICAgICAgICAgICAgICAgICA8cD4KICAgICAgICAgICAgICAgICAgICAgICAgVGhlcmUgYXJlIG1hbnkgdmFyaWF0aW9ucyBvZiBwYXNzYWdlcyBvZiBMb3JlbSBJcHN1bQogICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGUsIGJ1dCB0aGUgbWFqb3JpdHkgaGF2ZSBzdWZmZXJlZCBhbHRlcmF0aW9uIGluCiAgICAgICAgICAgICAgICAgICAgICAgIHNvbWUgZm9ybSwgYnkgaW5qZWN0ZWQgaHVtb3VyLCBvciByYW5kb21pc2VkIHdvcmRzIHdoaWNoCiAgICAgICAgICAgICAgICAgICAgICAgIGRvbnQgbG9vayBldmVuIHNsaWdodGx5IGJlbGlldmFibGUuCiAgICAgICAgICAgICAgICAgICAgPC9wPgogICAgICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0idGV4dC1yaWdodCBweC02IHB5LTMgYmctZ3JheS0xMDAgZGFyazpiZy1ncmF5LTcwMCByb3VuZGVkLWJsLWxnIHJvdW5kZWQtYnItbGciPgogICAgICAgICAgICAgICAgICAgIDxCdXR0b24KICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSJsdHI6bXItMiBydGw6bWwtMiIKICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25EaWFsb2dDbG9zZX0KICAgICAgICAgICAgICAgICAgICA+CiAgICAgICAgICAgICAgICAgICAgICAgIENhbmNlbAogICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPgogICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD0ic29saWQiIG9uQ2xpY2s9e29uRGlhbG9nT2t9PgogICAgICAgICAgICAgICAgICAgICAgICBPa2F5CiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+CiAgICAgICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgICAgPC9EaWFsb2c+CiAgICAgICAgPC9kaXY+CiAgICApCn0KCmV4cG9ydCBkZWZhdWx0IEN1c3RvbVN0eWxlCmBgYAo=";export{g as default};
