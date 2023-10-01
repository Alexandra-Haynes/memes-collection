
# HacktoberFest 2023 Coding Memes & Jokes! 🎉

![HacktoberFest 2023 Banner](https://raw.githubusercontent.com/ossamamehmood/Hacktoberfest2023/main/.github/logo.png)

Welcome to the **Coding Memes & Jokes** repository! A place to share your favorite coding memes and jokes, and also a perfect opportunity for your first Pull Request during Hacktoberfest 2023!

## Why Contribute?

1. 🎯 **Celebrate Open Source**: Hacktoberfest encourages participation in the open-source community, which grows bigger every year.
2. 🏆 **Receive a unique digital reward**: Participants with four pull/merge requests accepted between October 1 and October 31 will receive a unique digital reward.
3. 🎉 **Share Laughs**: Bring a smile to fellow developers by sharing your favorite coding memes and jokes.

## How to Participate in Hacktoberfest?

📢 [Register for Hacktoberfest here](https://hacktoberfest.digitalocean.com/)  🔥

## How to start this project?

1. **Open your terminal**: and navigate to the directory where you want to create the project.
2. **Run the command**: `npx create-react-app hacktoberfest2023-memes-collection` to create a new React project with the name "hacktoberfest2023-memes-collection".
3. **Navigate into the project directory**: by running `cd hacktoberfest2023-memes-collection`.
4. **Open the project**: in your code editor of choice (such as Visual Studio Code).
5. **In the terminal**: run the command `npm install` to install all the project dependencies listed in the `package.json` file.
6. **Start the development server**: once the installation is complete, you can start the development server by running the command `npm start`.
7. **View the project**: You can now view the project in your browser at `http://localhost:3000/`.

## How to Contribute?

1. **Fork the Repository**: Use the button at the top-right corner of this page.
2. **Clone the Fork**: `git clone https://github.com/Alexandra-Haynes/HacktoberFest2023-memes-collection.git`
3. **Navigate to the Repo**: `cd hacktoberfest2023-memes-collection`
4. **Create a New Branch**: `git checkout -b new-content`
5. **Add your Meme or Joke**:
   - For Memes:
   Add your meme to the `src/MemesCollection.json` file in the following format:

   ```markdown
   {
   "id": <unique-id>,
   "path": "<path-to-your-meme>"
   }
   ```

   Make sure to replace `<unique-id>` and `<path-to-your-meme>` with the appropriate values.
   Place your meme image in the `src/memes/` folder with the same name as the path value in the `MemesCollection.json` file.

   - For Jokes:  Add your joke to the `src/JokesCollection.json` file in the following format:

   ```markdown
   { "id": <unique-id> , "joke": "<your-joke>", "contributor": "<your-name>" }
   ```

   Make sure to replace `<unique-id>`, `<your-joke>`, and `<your-name>` with the appropriate values.

   For id, simply increment the last id in the array. Double-check to be unique (no one else used the same id).

6. **Commit Your Changes**: `git commit -m "Added a cool meme/joke"`
7. **Push to Your Fork**: `git push origin new-content`
8. **Submit a Pull Request**: Navigate back to your fork on GitHub, and click the "New pull request" button.

For more detailed contribution guidelines, please read [CONTRIBUTING.md](./CONTRIBUTING.md).
## Code of Conduct

We believe in fostering an inclusive community. All contributors are expected to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md). In case of any violations, the maintainers reserve the right to take appropriate actions.

## Always Remember

Make sure you submit more than 4 pull requests. Sometimes, due to various reasons, one of your PRs might not be counted by Hacktoberfest, so having extra PRs can ensure you secure your SWAGS!

---

Happy coding and have a fun Hacktoberfest! 🎃🎉
