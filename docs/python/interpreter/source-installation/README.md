# Python Installation

This is an alternative installation method, highly customizable and OS-independent. It is, however, significantly more complex for inexperienced users and thus, should only be used as a last resort in case none of the installers work.

A powerful feature of the source installation is that it can be perfomed in a completely portable manner, without requiring administrative privileges nor causing significant changes to the system.

## Installation

Prior to installation, the file must be decompressed. This can be achieved through a command line window or a graphical file manager. The following commands are for the command line:

```bash
# Be sure to be in the directory where the file is located.
tar -xzf Python-3.11.1.tgz
cd Python-3.11.1
```

If using a graphical file manager, just extract the file and navigate to the directory using the command line interface.

### Windows

For Windows, navigate to the `PCBuild` directory and execute the `build.bat` file. This will build the Python executable and place it in the `PCBuild` directory. No extra configuration is required for now.

### UNIX (macOS, Linux, etc.)

Make sure the current working directory (`pwd`) is the root of the Python source code. Then, run the following commands:

```bash
./configure  # No extra configuration is required for this matter.
make
make test
sudo make altinstall
```

## Environment variables

## Next Steps

Now that Python is installed, you can proceed to the [Packages](../../packages/README.md) tutorial.

You can also find the documentation for the standard library [here](https://docs.python.org/3.11/).
