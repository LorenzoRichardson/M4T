import os, random, sys

music_library = ("/cslab/home/LorenzoRichardson/Desktop/M4T/assets/MusicLibrary/Music")

all_media = []
playlist_ = []

def create_media_list():
    for path, subdirs, files in os.walk(music_library):
        for file in files:
            if file.lower().endswith(('.mp3')):
                all_media.append(os.path.join(path, file))

def random_selection_from_media():
    random_selection = random.choice(all_media)
    if random_selection not in playlist_:
        playlist_.append(random_selection)
    else:
        pass

def get_selections():
    for i in range(number):
        random_selection_from_media()
    print_playlist_()
    playlist_confirmation()

def number_of_selections():
    while True:
        try:
            global number
            number = int(input('How many files would you like to add to playlist? >>> '))
            break
        except ValueError:
            print('Enter a number.')

def print_playlist_():
    print('\n-------In playlist-------\n')
    print('[{0}]'.format('\n-------------------------\n'.join(str(i) for i in enumerate(playlist_, 1))))
    print('\n-------End playlist------\n')

def remove_selection():
    while True:
        try:
            to_remove = int(input('To remove a selection enter the number of the selection you want removed here. >>> '))
            if to_remove <= len(playlist_):
                break
        except ValueError:
            print('Enter a number.')
            remove_selection()
        try:
            playlist_.pop((to_remove - 1))
            break
        except (IndexError, UnboundLocalError):
            print('Enter a vaild number')
            remove_selection()
    clear()
    print_playlist_()
    playlist_confirmation()

def playlist_confirmation():
    ok = input('This list ok? >>> ').lower()
    if ok == 'yes' or ok == 'y':
        play_playlist_()
    elif ok == 'no' or ok == 'n':
        while True:
            new = input('Get new list or remove a specific selection? >>> ').lower()
            if new == 'new list' or new == 'n':
                del playlist_[:]
                clear()
                get_selections()
                break
            elif new == 'specific selection' or new == 's':
                remove_selection()
                break
            else:
                 print('Enter \'new\' or \'selection\'')
    else:
        playlist_confirmation()

def play_playlist_():
    for i in playlist_:
        play_cmd = "rundll32 url.dll,FileProtocolHandler \"" + i + "\""
        os.system(play_cmd)

def clear():
    os.system('cls')

def main():
    create_media_list()
    number_of_selections()
    get_selections()

if __name__=="__main__":
    main()
