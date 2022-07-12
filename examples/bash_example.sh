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

# Assign the output of an operation to a variable. Use ``
DATE=`date +%d%m%Y`

# Concatenate text variables
VAR1="this_"
VAR2="is_an_"
VAR3="example.tar"

VAR4=$VAR1$VAR2$VAR3

# Modify privileges over file
chmod u=rwx fileName    # I can read, write and execute
chmod g=rx fileName     # Groups can read and write
chmod o=r fileName      # Others can only read
chmod ug=rw fileName    # I and groups and read and write
chmod o-r fileName      # Delete reading privileges to others
chmod o+r fileName      # Add reading privileges to other

# Append to file
echo "Append this message" >> file.txt

# Edit cron jobs
crontab -e

# Crontab notation
# m: minute (0-59)
# h: hour (0-23)
# dom: day of month (0-31)
# mon: momth (0-12)
# dow: doy of week (0-7)

# Example, everyday at 2am: 0 2 * * * 

# Shortcuts: @yearly/@annually, @monthly, @weekly, @daily/@midnight, @hourly

# Run at reboot: @reboot

# ~/.bashrc Loads everytime a new termial is opened
