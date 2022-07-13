# Generate SSH private and public keys
ssh-keygen -t rsa

# To ssh into remote server
ssh -v user-name@58.89.239.83
# First public key must be saved into remote server. It is saved in .ssh folder
# In AWS EC2 ~./.ssh/authorized_keys