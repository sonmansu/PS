import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int x = scanner.nextInt();
        for (int i = 0; i < n; i++) {
            int num = scanner.nextInt();
            if (num < x) System.out.print(num + " ");
        }
    }
}