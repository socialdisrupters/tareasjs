public class App {
    public static void main(String[] args) throws Exception {
       
        String multiplos="";

        for(int i=1;i<=200;i++){
            if(i%5==0 && i%3==0){
                multiplos=multiplos+"trescinco"+",\n";
            }
            else if(i%5==0){
                multiplos=multiplos+"cinco"+",\n";
            }
            else if(i%3==0){
                multiplos=multiplos+"tres"+",\n";
            }
            else{
                multiplos=multiplos+i+",\n";
            }
        }
       
          System.out.println(("multiplos de 3, 5 o 3 y 5: \n") + multiplos);

    }
}
