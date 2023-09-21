const g="data:text/markdown;base64,YGBganN4CmltcG9ydCBDaGFydCBmcm9tICdyZWFjdC1hcGV4Y2hhcnRzJwppbXBvcnQgeyBDT0xPUlMgfSBmcm9tICdAL2NvbnN0YW50cy9jaGFydC5jb25zdGFudCcKCmNvbnN0IERhc2hlZExpbmUgPSAoKSA9PiB7CiAgICBjb25zdCBkYXRhID0gWwogICAgICAgIHsKICAgICAgICAgICAgbmFtZTogJ1Nlc3Npb24gRHVyYXRpb24nLAogICAgICAgICAgICBkYXRhOiBbNDUsIDUyLCAzOCwgMjQsIDMzLCAyNiwgMjEsIDIwLCA2LCA4LCAxNSwgMTBdLAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICBuYW1lOiAnUGFnZSBWaWV3cycsCiAgICAgICAgICAgIGRhdGE6IFszNSwgNDEsIDYyLCA0MiwgMTMsIDE4LCAyOSwgMzcsIDM2LCA1MSwgMzIsIDM1XSwKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgbmFtZTogJ1RvdGFsIFZpc2l0cycsCiAgICAgICAgICAgIGRhdGE6IFs4NywgNTcsIDc0LCA5OSwgNzUsIDM4LCA2MiwgNDcsIDgyLCA1NiwgNDUsIDQ3XSwKICAgICAgICB9LAogICAgXQoKICAgIHJldHVybiAoCiAgICAgICAgPENoYXJ0CiAgICAgICAgICAgIG9wdGlvbnM9e3sKICAgICAgICAgICAgICAgIGNoYXJ0OiB7CiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNTAsCiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLAogICAgICAgICAgICAgICAgICAgIHpvb206IHsKICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsCiAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICBjb2xvcnM6IFsuLi5DT0xPUlNdLAogICAgICAgICAgICAgICAgZGF0YUxhYmVsczogewogICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHN0cm9rZTogewogICAgICAgICAgICAgICAgICAgIHdpZHRoOiBbMywgNSwgM10sCiAgICAgICAgICAgICAgICAgICAgY3VydmU6ICdzdHJhaWdodCcsCiAgICAgICAgICAgICAgICAgICAgZGFzaEFycmF5OiBbMCwgOCwgNV0sCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgbGVnZW5kOiB7CiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcEhvdmVyRm9ybWF0dGVyOiBmdW5jdGlvbiAodmFsLCBvcHRzKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgJyAtICcgKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0cy53Lmdsb2JhbHMuc2VyaWVzW29wdHMuc2VyaWVzSW5kZXhdWwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdHMuZGF0YVBvaW50SW5kZXgKICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgJycKICAgICAgICAgICAgICAgICAgICAgICAgKQogICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgbWFya2VyczogewogICAgICAgICAgICAgICAgICAgIHNpemU6IDAsCiAgICAgICAgICAgICAgICAgICAgaG92ZXI6IHsKICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZU9mZnNldDogNiwKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgIHhheGlzOiB7CiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllczogWwogICAgICAgICAgICAgICAgICAgICAgICAnMDEgSmFuJywKICAgICAgICAgICAgICAgICAgICAgICAgJzAyIEphbicsCiAgICAgICAgICAgICAgICAgICAgICAgICcwMyBKYW4nLAogICAgICAgICAgICAgICAgICAgICAgICAnMDQgSmFuJywKICAgICAgICAgICAgICAgICAgICAgICAgJzA1IEphbicsCiAgICAgICAgICAgICAgICAgICAgICAgICcwNiBKYW4nLAogICAgICAgICAgICAgICAgICAgICAgICAnMDcgSmFuJywKICAgICAgICAgICAgICAgICAgICAgICAgJzA4IEphbicsCiAgICAgICAgICAgICAgICAgICAgICAgICcwOSBKYW4nLAogICAgICAgICAgICAgICAgICAgICAgICAnMTAgSmFuJywKICAgICAgICAgICAgICAgICAgICAgICAgJzExIEphbicsCiAgICAgICAgICAgICAgICAgICAgICAgICcxMiBKYW4nLAogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgdG9vbHRpcDogewogICAgICAgICAgICAgICAgICAgIHk6IFsKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCArICcgKG1pbnMpJwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogZnVuY3Rpb24gKHZhbCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsICsgJyBwZXIgc2Vzc2lvbicKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgfSwKICAgICAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uICh2YWwpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIF0sCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgZ3JpZDogewogICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2YxZjFmMScsCiAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICB9fQogICAgICAgICAgICBzZXJpZXM9e2RhdGF9CiAgICAgICAgICAgIGhlaWdodD17MzAwfQogICAgICAgIC8+CiAgICApCn0KCmV4cG9ydCBkZWZhdWx0IERhc2hlZExpbmUKYGBgCg==";export{g as default};
