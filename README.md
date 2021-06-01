#### Preparing For Building

1. To start with, download [Node](https://nodejs.org/en/) on your device depending on your operating system.
2. Open Terminal and navigate to the folder `broccoli_co`
3. Download all dependencies by running:

```shell
npm install
```


#### Building

To build the application, open Terminal and navigate to the folder `broccoli_co`, then run:

```shell
npm run build
```

#### Running

To run the application, open `broccoli_co/dist/index.html` in a modern browser, e.g. Chrome.

You can also build and run the application easily by running it in development mode:

```shell
npm run dev
```

The app automatically runs in desktop mode. You can also try running it in mobile mode by first pressing `ctrl + shift + i` and then pressing `ctrl + shift + m`.

#### Testing

When click on 'Request an invite' button, a popup shows up. There are several test cases for you to test the functioning of the application.

<table>
   <tr>
      <td>No.</td>
      <td colspan="2">Inputs & Operations</td>
      <td>Results</td>
   </tr>
   <tr>
      <td>Test Case 01</td>
      <td>Click</td>
      <td>'Request an invite' button</td>
      <td>'Request an invite' popup shows</td>
   </tr>
   <tr>
      <td rowspan="4">Test Case 02</td>
      <td>Full name</td>
      <td>Dylan</td>
      <td rowspan="4">'Send' button turns gray, then 'Request an invite' popup dismisses and 'All done' popup shows</td>
   </tr>
   <tr>
      <td>Email</td>
      <td>test@test.com</td>
   </tr>
   <tr>
      <td>Confirm email</td>
      <td>test@test.com</td>
   </tr>
   <tr>
      <td>Click</td>
      <td>'Send' button</td>
   </tr>
   <tr>
      <td>Test Case 03</td>
      <td>Click</td>
      <td>'OK' button</td>
      <td>'All done' popup dismisses</td>
   </tr>
   <tr>
      <td rowspan="4">Test Case 04</td>
      <td>Full name</td>
      <td>Dylan</td>
      <td rowspan="4">'Send' button turns gray, then turns white again, error message appears</td>
   </tr>
   <tr>
      <td>Email</td>
      <td>usedemail@airwallex.com</td>
   </tr>
   <tr>
      <td>Confirm email</td>
      <td>usedemail@airwallex.com</td>
   </tr>
   <tr>
      <td>Click</td>
      <td>'Send' button</td>
   </tr>
   <tr>
      <td rowspan="4">Test Case 05</td>
      <td>Full name</td>
      <td></td>
      <td rowspan="4">Full name input and confirm email input are highlighted</td>
   </tr>
   <tr>
      <td>Email</td>
      <td>test@test.com</td>
   </tr>
   <tr>
      <td>Confirm email</td>
      <td>test2@test2.com</td>
   </tr>
   <tr>
      <td>Click</td>
      <td>'Send' button</td>
   </tr>
   <tr>
      <td rowspan="4">Test Case 06</td>
      <td>Full name</td>
      <td>dd</td>
      <td rowspan="4">Full name input and email input are highlighted</td>
   </tr>
   <tr>
      <td>Email</td>
      <td>test@test</td>
   </tr>
   <tr>
      <td>Confirm email</td>
      <td>test@test</td>
   </tr>
   <tr>
      <td>Click</td>
      <td>'Send' button</td>
   </tr>
   <tr>
      <td rowspan="4">Test Case 07</td>
      <td>Full name</td>
      <td>Dylan</td>
      <td rowspan="4">Email input and confirm email input are highlighted</td>
   </tr>
   <tr>
      <td>Email</td>
      <td></td>
   </tr>
   <tr>
      <td>Confirm email</td>
      <td></td>
   </tr>
   <tr>
      <td>Click</td>
      <td>'Send' button</td>
   </tr>
</table>

