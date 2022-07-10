#!bin/bash                          # Note to tell the interpreter this is a bash file

# OS running shell
echo $SHELL

# Output something to a file
cat file1.txt > file2.txt           # Copies contents from file 1 into file 2

# Open large files and scroll
more file.txt

# Remove all files in directory but ask for confirmation in each one
rm -ir myDir

# Find file in a directory by its name
find /myDir -name "file_name"

# Find file in a directory by its name AND redirect errors to another dir and delete them
find /myDir -name "file_name" 2>/dev/null

# Search for all instances of something in a file
grep find_this test/my_doc.txt

# Take output of command as input for another command
find / -name "*backup*" 2>/dev/null | grep $USER

# History of commands used
history

# Set and mofify bash aliases. Bash runs .bash_aliases at init
alias fbackup='find ~ -name "backup*" 2>/dev/null'
