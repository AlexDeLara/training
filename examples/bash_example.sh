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

# Overwrite gile
echo "Overwrite" > file.txt

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

# Find a file
which fileName

# Count file lines
wc -l fileName

# Count file words
wc -w fileName

# Create multiple directories
mkdir -p dir1/dir2/dir3

# Loops
while true;
    do echo "Hanging out...";
    sleep 2;
    done

# See active processes
jobs

# Stop a running process
Ctrl + Z

# Resume a stopped job
fg 1 # 1 is the process id

# Run process in the backround: add & at the end of the command
# To kill a background process first it must be moved to the foreground

# Bash piping
# Execute command2 if command1 is successful
command1 && command2 
# Take command1 output as input for command2
command1 | command2
# Redirect command1 output to file and overwrite
command1 > file.txt

# Sort output in reverse
sort -r

# Redirect error to log
2>log.log

# Read only last/first n lines of file
tail -n 3 fileName
head -n 2 fileName

# Shortcuts
# Ctrl+A To move at the start of the line
# Ctrl+E To move at the end of the line
# Ctrl+L Clear console
# !56 Executes line 56 in history
# !! Runs last command again 

# Save env variable
export VARNAME=VALUE