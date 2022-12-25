import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // 10807번
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int[] arr = new int[n];
        int cnt = 0;
        int v;

        for (int i = 0; i < n; i++) {
            arr[i] = scanner.nextInt();
        }
        v = scanner.nextInt();

        for (int i: arr) {
            if (i == v) cnt++;
        }
        System.out.println(cnt);
    }
}